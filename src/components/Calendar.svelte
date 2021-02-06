<script>
    import config from "../store/config"
    import FullCalendar from 'svelte-fullcalendar';
    import adaptivePlugin from '@fullcalendar/adaptive';
    import bootstrapPlugin from '@fullcalendar/bootstrap';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import googleCalendarPlugin from '@fullcalendar/google-calendar';
    import interactionPlugin from '@fullcalendar/interaction';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import listPlugin from '@fullcalendar/list';

    let calendarEl = null;
    let isLoading = true;

    function getHeaderProps() {
        return {
            left: '',
            center: 'prev,title,next',
            right: window.innerWidth < 765 ? '' : 'dayGridMonth,listWeek'
        }
    }

    /** @type {import('@fullcalendar/common').CalendarOptions}  */
    let options = {
        schedulerLicenseKey: config.Calendar.LicenseKey,
        plugins: [ adaptivePlugin, bootstrapPlugin, dayGridPlugin, googleCalendarPlugin, interactionPlugin, listPlugin, timeGridPlugin ],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        dateClick: function(info) {
          console.log(info);
        },

        initialView: 'dayGridMonth',
        themeSystem: 'bootstrap',
        weekNumbers: true,
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        selectable: true,
        nowIndicator: true,
        dayMaxEvents: true, // allow "more" link when too many events

        eventSources: (function() {
            let output = [];
            for (let k in config.Calendar.Events) {
                output[k] = {
                    googleCalendarApiKey: config.Calendar.Events[k].APIKey,
                    googleCalendarId: config.Calendar.Events[k].CalendarID,
                }
            }
            return output;
        })(),
        eventClick: function(arg) {
            // opens events in a popup window
            window.open(arg.event.url, 'google-calendar-event', 'width=800,height=600');

            arg.jsEvent.preventDefault(); // don't navigate in main tab
        },
        windowResize: () => {
            const calendar = calendarEl.getAPI();
            calendar.changeView(window.innerWidth < 765 ? 'listWeek' : 'dayGridMonth');
        },
        loading: function (loading) {
            isLoading = loading;
            if (!loading) {
                window.dispatchEvent(new Event('resize'));
            }
        }
    };
</script>

<style lang="scss" global>
    @import "../styles/app/_variables.scss";

    .fc {
      margin-top: 1.5rem !important;
    }

    .fc .fc-toolbar.fc-header-toolbar {
      margin-bottom: 1.5rem !important;
    }

    .fc-day-disabled {
      background: transparent !important;
    }

    .fc td {
      border: 1px solid $border-color;
    }

    .hidden {
      //visibility: hidden;
      display: none;
    }
</style>

<div class="row">
    <FullCalendar bind:this="{calendarEl}" {options}/>
</div>
