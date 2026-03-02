<script>
  import trainings from './trainings.json';

  const today = new Date().toISOString().slice(0, 10);
  let query = '';
  let selectedRegion = 'All';
  let selectedMode = 'All';
  let selectedDate = 'All dates';

  let showRegistrationModal = false;
  let intendedCourse = '';
  let classSearch = '';
  let selectedClassId = '';

  const regions = ['All', ...new Set(trainings.map((t) => t.region))];
  const modes = ['All', ...new Set(trainings.map((t) => t.mode))];

  const formatDate = (dateString) => new Date(dateString + 'T00:00:00').toLocaleDateString();

  const allAvailableDates = [
    'All dates',
    ...new Set(trainings.map((t) => t.startDate).sort((a, b) => a.localeCompare(b)))
  ];

  const toICSDate = (dateString) => dateString.replaceAll('-', '');
  const escapeICS = (value) => String(value).replaceAll('\\', '\\\\').replaceAll(';', '\\;').replaceAll(',', '\\,').replaceAll('\n', '\\n');

  function buildEventDetails(training) {
    return [
      `Audience: ${training.audience}`,
      `Delivery mode: ${training.mode}`,
      `Region: ${training.region}`,
      `Tuition: ${training.tuition}`,
      `Other costs / notes: ${training.other}`,
      `Registration status: ${training.registration}`
    ].join('\n');
  }

  function openRegistration(training) {
    intendedCourse = `${training.title} (${formatDate(training.startDate)}-${formatDate(training.endDate)})`;
    classSearch = '';
    selectedClassId = '';
    showRegistrationModal = true;
  }

  function closeRegistration() {
    showRegistrationModal = false;
  }

  function submitRegistrationSelection() {
    if (!selectedClassId) return;
    const selected = trainings.find((t) => String(t.id) === String(selectedClassId));
    if (selected) {
      alert(`Selection captured: ${selected.title} in ${selected.location}. This is where we'd hand off to the external registration form.`);
      closeRegistration();
    }
  }

  function getCalendarUrls(training) {
    const endExclusive = new Date(training.endDate + 'T00:00:00');
    endExclusive.setDate(endExclusive.getDate() + 1);
    const endExclusiveDate = endExclusive.toISOString().slice(0, 10);

    const paramsGoogle = new URLSearchParams({
      action: 'TEMPLATE',
      text: training.title,
      dates: `${toICSDate(training.startDate)}/${toICSDate(endExclusiveDate)}`,
      details: buildEventDetails(training),
      location: training.location
    });

    const paramsOutlook = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      startdt: training.startDate,
      enddt: endExclusiveDate,
      subject: training.title,
      body: buildEventDetails(training),
      location: training.location,
      allday: 'true'
    });

    return {
      google: `https://calendar.google.com/calendar/render?${paramsGoogle.toString()}`,
      outlook: `https://outlook.office.com/calendar/0/deeplink/compose?${paramsOutlook.toString()}`
    };
  }

  function downloadICS(training) {
    const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const dtStart = toICSDate(training.startDate);
    const dtEndDate = new Date(training.endDate + 'T00:00:00');
    dtEndDate.setDate(dtEndDate.getDate() + 1);
    const dtEnd = dtEndDate.toISOString().slice(0, 10).replaceAll('-', '');
    const eventDescription = buildEventDetails(training);

    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//KYEM Mirror//Training Calendar//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:kyem-training-${training.id}@kyem-mirror.local`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${dtStart}`, `DTEND;VALUE=DATE:${dtEnd}`,
      `SUMMARY:${escapeICS(training.title)}`, `LOCATION:${escapeICS(training.location)}`, `DESCRIPTION:${escapeICS(eventDescription)}`,
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${training.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  const inQuery = (training) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [training.title, training.audience, training.location, training.other, training.startDate, training.endDate]
      .join(' ')
      .toLowerCase()
      .includes(q);
  };

  $: filtered = trainings.filter((training) => {
    const regionMatch = selectedRegion === 'All' || training.region === selectedRegion;
    const modeMatch = selectedMode === 'All' || training.mode === selectedMode;
    const dateMatch = selectedDate === 'All dates' || training.startDate === selectedDate;
    return regionMatch && modeMatch && dateMatch && inQuery(training);
  });

  $: searchableClassOptions = trainings.filter((training) => {
    const q = classSearch.trim().toLowerCase();
    if (!q) return true;
    return `${training.title} ${training.location} ${training.startDate}`.toLowerCase().includes(q);
  });
</script>

<main class="layout">
  <header>
    <p class="eyebrow">Unofficial prototype</p>
    <h1>Kentucky Emergency Management Training Calendar</h1>
    <p class="intro">Searchable, date-filtered calendar with safer registration flow to prevent wrong class preselection.</p>
  </header>

  <section class="controls" aria-label="Filter trainings">
    <label>Search
      <input bind:value={query} placeholder="Search by course, audience, location, notes, or date" />
    </label>
    <label>Region
      <select bind:value={selectedRegion}>{#each regions as region}<option value={region}>{region}</option>{/each}</select>
    </label>
    <label>Delivery mode
      <select bind:value={selectedMode}>{#each modes as mode}<option value={mode}>{mode}</option>{/each}</select>
    </label>
    <label>Start date
      <select bind:value={selectedDate}>
        {#each allAvailableDates as date}
          <option value={date}>{date === 'All dates' ? date : formatDate(date)}</option>
        {/each}
      </select>
    </label>
  </section>

  <section class="available-dates" aria-label="Available dates">
    <strong>All available dates in this mock:</strong>
    <div class="chips">
      {#each allAvailableDates.slice(1) as date}
        <button class:selected={selectedDate === date} on:click={() => (selectedDate = date)}>{formatDate(date)}</button>
      {/each}
      <button class:selected={selectedDate === 'All dates'} on:click={() => (selectedDate = 'All dates')}>Show all</button>
    </div>
  </section>

  <p class="summary">Showing {filtered.length} of {trainings.length} trainings · Updated {formatDate(today)}</p>

  <section class="table-wrap" aria-label="Training results">
    <table>
      <thead><tr><th>Course</th><th>Dates</th><th>Region</th><th>Location</th><th>Tuition</th><th>Other costs / notes</th><th>Status</th><th>Registration</th><th>Add to calendar</th></tr></thead>
      <tbody>
        {#if filtered.length === 0}
          <tr><td colspan="9" class="empty">No matching trainings found. Try broader filters.</td></tr>
        {:else}
          {#each filtered as t}
            <tr>
              <td><strong>{t.title}</strong><div class="meta">{t.audience} · {t.mode}</div></td>
              <td>{formatDate(t.startDate)}–{formatDate(t.endDate)}</td>
              <td>{t.region}</td><td>{t.location}</td><td>{t.tuition}</td><td>{t.other}</td>
              <td><span class="badge">{t.registration}</span></td>
              <td><button class="register-btn" on:click={() => openRegistration(t)}>Register</button></td>
              <td>
                <div class="calendar-actions">
                  <button class="calendar-btn apple" on:click={() => downloadICS(t)}><span class="logo"></span> Add to Calendar</button>
                  <a class="calendar-btn google" href={getCalendarUrls(t).google} target="_blank" rel="noopener noreferrer"><span class="logo">G</span> Google</a>
                  <a class="calendar-btn outlook" href={getCalendarUrls(t).outlook} target="_blank" rel="noopener noreferrer"><span class="logo">O</span> Outlook</a>
                </div>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </section>
</main>

{#if showRegistrationModal}
  <div class="modal-backdrop" role="presentation" on:click={closeRegistration}></div>
  <section class="modal" role="dialog" aria-modal="true" aria-label="Choose class before registration">
    <h2>Confirm class selection before registration</h2>
    <p class="modal-intended">You clicked: <strong>{intendedCourse}</strong></p>
    <p class="modal-warning">To prevent wrong pre-population issues, class selection is intentionally <strong>not</strong> pre-filled. Please search and select your class.</p>

    <label class="modal-field">Search classes
      <input bind:value={classSearch} placeholder="Type course, county, or date" />
    </label>

    <label class="modal-field">Choose class <span class="required">*</span>
      <select bind:value={selectedClassId}>
        <option value="">-- Select class from search results --</option>
        {#each searchableClassOptions as t}
          <option value={t.id}>{formatDate(t.startDate)} — {t.title}, {t.location}</option>
        {/each}
      </select>
    </label>

    <div class="modal-actions">
      <button class="secondary" on:click={closeRegistration}>Cancel</button>
      <button class="primary" on:click={submitRegistrationSelection} disabled={!selectedClassId}>Continue to registration</button>
    </div>
  </section>
{/if}

<style>
  .layout { max-width: 1150px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,.1); padding: 2rem; }
  .eyebrow { text-transform: uppercase; letter-spacing: .08em; color: #35578a; font-size: .75rem; margin: 0; }
  h1 { margin: .25rem 0 .75rem; color: #17253b; }
  .intro { margin-top: 0; color: #2b3b56; }
  .controls { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: .75rem; margin: 1.25rem 0; }
  label { display: grid; gap: .4rem; font-weight: 600; font-size: .9rem; color: #1f3350; }
  input, select { padding: .65rem; border: 1px solid #c5d0df; border-radius: 8px; font: inherit; }
  .available-dates { margin-bottom: .75rem; color: #1f3350; }
  .chips { display: flex; gap: .4rem; flex-wrap: wrap; margin-top: .4rem; }
  .chips button { border: 1px solid #c5d0df; background: #fff; border-radius: 999px; padding: .25rem .6rem; cursor: pointer; }
  .chips button.selected { background: #e7f1ff; border-color: #8fb0d8; color: #113b68; }
  .summary { margin: 0 0 .75rem; color: #425b80; }
  .table-wrap { overflow: auto; border: 1px solid #d7e0ec; border-radius: 8px; }
  table { width: 100%; border-collapse: collapse; min-width: 1280px; }
  th, td { padding: .75rem; border-bottom: 1px solid #e6edf6; vertical-align: top; text-align: left; }
  thead th { background: #f3f7fc; color: #17253b; }
  .meta { color: #5d6e87; font-size: .85rem; margin-top: .25rem; }
  .badge { display: inline-block; background: #e7f1ff; color: #184778; padding: .2rem .5rem; border-radius: 999px; font-weight: 600; font-size: .8rem; }
  .register-btn { border: 1px solid #0f5db0; background: #1c73d3; color: #fff; border-radius: 999px; font-weight: 600; padding: .35rem .65rem; cursor: pointer; }
  .calendar-actions { display: flex; flex-direction: column; gap: .35rem; min-width: 178px; }
  .calendar-btn { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid #8fb0d8; background: #f3f8ff; color: #113b68; border-radius: 999px; font-weight: 600; padding: .35rem .65rem; cursor: pointer; text-decoration: none; font-size: .85rem; }
  .calendar-btn .logo { display: inline-flex; align-items: center; justify-content: center; width: 1.2rem; height: 1.2rem; border-radius: 50%; font-size: .75rem; background: rgba(255,255,255,.85); border: 1px solid rgba(17,59,104,.2); }
  .calendar-btn.apple { background: #f7f7f8; color: #111; border-color: #d8d8db; }
  .calendar-btn.google { background: #f3f8ff; color: #113b68; }
  .calendar-btn.outlook { background: #eef6ff; color: #0a3f73; }
  .empty { text-align: center; color: #5d6e87; }

  .modal-backdrop { position: fixed; inset: 0; background: rgba(8, 23, 48, .45); z-index: 50; }
  .modal { position: fixed; z-index: 60; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(680px, 92vw); background: #fff; border-radius: 12px; padding: 1rem 1rem 1.2rem; box-shadow: 0 16px 40px rgba(0,0,0,.3); }
  .modal h2 { margin: .2rem 0 .55rem; }
  .modal-intended { margin: 0 0 .35rem; color: #1c3355; }
  .modal-warning { margin: 0 0 .75rem; color: #7a3c00; background: #fff5e6; border: 1px solid #ffd9a3; border-radius: 8px; padding: .55rem; }
  .modal-field { margin-bottom: .55rem; }
  .required { color: #c00; }
  .modal-actions { display: flex; justify-content: flex-end; gap: .5rem; margin-top: .5rem; }
  .secondary, .primary { border-radius: 8px; padding: .45rem .8rem; font-weight: 600; cursor: pointer; }
  .secondary { border: 1px solid #b9c7dc; background: #fff; color: #1c3355; }
  .primary { border: 1px solid #0f5db0; background: #1c73d3; color: #fff; }
  .primary:disabled { opacity: .5; cursor: not-allowed; }

  @media (max-width: 900px) { .layout { padding: 1rem; } .controls { grid-template-columns: 1fr; } }
</style>
