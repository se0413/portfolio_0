$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { 

		effect: "fade",
	
		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},
	
		loop: true, 
	
		pagination: {  
			el: '.swiper-pagination', 
			clickable: true,  
			renderBullet: function (index, className) {  
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	
	});
	$('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  
	})
   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start(); 
    })

	const bookmark_swiper = new Swiper('.bookmark .swiper', { 
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            1400: {  
                slidesPerView: 7,
			    spaceBetween: 10,
            },
            1000: {  
                slidesPerView: 5,
			    spaceBetween: 10,
            },
            600: {  
                slidesPerView: 4,
			    spaceBetween: 10,
            },
            480: {  
                slidesPerView: 3,
			    spaceBetween: 10,
            },
        },
        centeredSlides: false, 
        loop: false,  
        navigation: {
            nextEl: '.tit_txt .btn_next',
            prevEl: '.tit_txt .btn_prev',
        },
    });

    let tab_btn = $('.board1 .tap_area .tap_btn ul li') 
    let tab_name
    let tab_cnt = $('.board1 .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt_prant = $('.board1 .tap_area .tap_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')

        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')

        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+ tab_name
        console.log(tab_name)

        tab_cnt.removeClass('active')
        tab_cnt_prant.find(tab_name).addClass('active')
        
    })

    $(document).ready(function() {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        let currentDate = new Date();
        let selectedDate = null;
        let events = [
            { date: '2024-11-01', description: '동계 계절수업 수강신청 기간\n1(월)~14(목)' },
            { date: '2024-11-17', description: '수업일수 3/4선(계절일로부터79일)' },
            { date: '2024-11-25', description: '동계 계절수업 수강신청 정정기간\n25(월)~28(목)' }
        ];

        function generateCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            
            $('.calendar-grid .date').remove();
            $('.current-month').text(`${year}.${String(month + 1).padStart(2, '0')}`);
            
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const totalDays = lastDay.getDate();
            const firstDayIndex = firstDay.getDay();
            
            // Previous month's days
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for(let i = firstDayIndex - 1; i >= 0; i--) {
                const dayElement = $('<div>')
                    .addClass('date other-month')
                    .text(prevMonthLastDay - i);
                $('.calendar-grid').append(dayElement);
            }
            
            // Current month's days
            const today = new Date();
            for(let day = 1; day <= totalDays; day++) {
                const dayElement = $('<div>').addClass('date').text(day);
                
                // Check if date has event
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                if(events.some(event => event.date === dateStr)) {
                    dayElement.addClass('has-event');
                }
                
                if(year === today.getFullYear() && 
                   month === today.getMonth() && 
                   day === today.getDate()) {
                    dayElement.addClass('today');
                }
                
                const dayOfWeek = new Date(year, month, day).getDay();
                if(dayOfWeek === 0 || dayOfWeek === 6) {
                    dayElement.addClass('weekend');
                }
                
                $('.calendar-grid').append(dayElement);
            }
            
        }

        function addEvent() {
            const date = $('#event-date').val();
            const description = $('#event-description').val();
            
            if(date && description) {
                events.push({ date, description });
                
                // Add new event to the events list
                const eventItem = $('<div>').addClass('event-item');
                const eventDate = new Date(date);
                const month = eventDate.getMonth() + 1;
                const day = eventDate.getDate();
                
                eventItem.html(`
                    <div class="event-date">${month}월 ${day}일</div>
                    <div class="event-description">${description}</div>
                `);
                
                $('#events-list').append(eventItem);
                
                // Clear form
                $('#event-date').val('');
                $('#event-description').val('');
                
                // Regenerate calendar to show new event indicator
                generateCalendar(currentDate);
            }
        }

        // Initial calendar generation
        generateCalendar(currentDate);

        // Event handlers
        $('.prev-month').click(function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar(currentDate);
        });

        $('.next-month').click(function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar(currentDate);
        });

        $(document).on('click', '.date:not(.other-month)', function() {
            $('.date').removeClass('selected');
            $(this).addClass('selected');
            selectedDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                parseInt($(this).text())
            );
        });
    });

    const event_swiper = new Swiper('.event .swiper', { 
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            1070: {  
                slidesPerView:2,
			    spaceBetween: 10,
            },
        },
        centeredSlides: false, 
        loop: false,  
        navigation: {
            nextEl: '.event .btn_next',
            prevEl: '.event .btn_prev',
        },
    });
    const gallery_swiper = new Swiper('.gallery .swiper', { 
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            1070: {  
                slidesPerView:2,
			    spaceBetween: 10,
            },
        },
        centeredSlides: false, 
        loop: false,  
        navigation: {
            nextEl: '.gallery .btn_next',
            prevEl: '.gallery .btn_prev',
        },
    });

})