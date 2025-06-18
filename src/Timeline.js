import React, { useEffect, useRef, useState } from "react";
import './timeline.css';

// Images
import img1 from './assets/images/obp 1-D5Rbw8zb.avif';
import img2 from './assets/images/MPD 3-BSdWA76q.avif';
import img3 from './assets/images/Success-w3z5xRyX.avif';
import img4 from './assets/images/gbp 5-BUogcWpr.avif';
import img5 from './assets/images/jmd-BRBu3C7B.avif';
import img6 from './assets/images/MGF 1-BOpXYu_y.avif';
import img8 from './assets/images/mohan-Bhbgo6o-.avif';
import img9 from './assets/images/okkla-C4nrA0re.avif';
import img10 from './assets/images/prop-CP-BnRE4zyN.avif';
import img13 from './assets/images/LOUNGEAREA1-CVgcy5MG.avif';
import img14 from './assets/images/142 NOIDA 1-DztVV_3h.avif';
import img15 from './assets/images/grovy 1-D4hIQ2P4.avif';
import img16 from './assets/images/HYDERABAD 1-BB-Qt9OM.avif';
import img7 from './assets/images/1 (1)-DWj-BICG.avif'


const events = [
  {
    image: img4,
    time: "2018",
    title: "Global Business Park, MG Road",
    description: "Tower D, Global Business Park MG Road, Gurgaon<br /><strong>Rating: 4.8 (57 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-global-business-park/"
  },
  {
    image: img3,
    time: "2019",
    title: "Success Towers, Golf Course Ext.",
    description: "Suncity Success Tower, Golf Course Extension Road, Gurgaon<br /><strong>Rating: 4.7 (99 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-success-tower/"
  },
  {
    image: img1,
    time: "2024",
    title: "Sohna Road, Gurgaon",
    description: "Sohna Road, Sector 48, near Subhash Chowk, Gurgaon, Haryana<br /><strong>Rating: 4.9 (85 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-orchid-business-park/"
  },
  {
    image: img2,
    time: "2024",
    title: "Golf Course Road, Gurgaon",
    description: "2nd Floor, MPD Tower, Golf Course Road, Gurgaon<br /><strong>Rating: 4.9 (99 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-mpd-tower/"
  },
  {
    image: img5,
    time: "2021",
    title: "JMD Empire Square, MG Road",
    description: "Tower D, Global Business Park MG Road, Gurgaon<br /><strong>Rating: 4.5 (297 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-empire-square/"
  },
  {
    image: img6,
    time: "2021",
    title: "MGF Megacity Mall, MG Road",
    description: "JMD Empire Square MG Road, Gurgaon<br /><strong>Rating: 5.0 (19 reviews)",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-megacity/"
  },
  {
    image: img7,
    time: "2020",
    title: "Udyog Vihar, Gurgaon",
    description: "887, Shankar Chowk Rd, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana, 122022<br /><strong>Coming Soon",
    city: "Gurgaon", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/gurgaon/altf-udyog-vihar/"
  },
  {
    image: img8,
    time: "2019",
    title: "Mohan Cooperative, Delhi",
    description: "Plot No A 26, Block B, Mohan Cooperative Industrial Estate, Delhi<br /><strong>Newly Launched",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-mohan-cooperative/"
  },
  {
    image: img9,
    time: "2018",
    title: "Okhla, Delhi",
    description: "101, Mathura Rd, CRRI, Ishwar Nagar, Okhla, New Delhi<br /><strong>Rating: 4.9 (188 reviews)",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-101-okhla/"
  },
  {
    image: img10,
    time: "2017",
    title: "Barakhamba Road, Delhi",
    description: "5th Floor, Wing-A, Statesman House, Barakhamba Road, New Delhi<br /><strong>Rating: 4.9 (51 reviews)",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-statesman-house/"
  },
  {
    image: img13,
    time: "2022",
    title: "Connaught Place, Delhi",
    description: "Connaught Place, Delhi<br /><strong>Coming Soon",
    city: "Delhi", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/delhi/altf-regal-building/"
  },
  {
    image: img7,
    time: "2020",
    title: "Sector 62, Noida",
    description: "C-20, 1/1A, Coast Guard Golf Ground Rd, Sector 62, Noida<br /><strong>Rating: 4.5 (101 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-62/"
  },
  {
    image: img13,
    time: "2020",
    title: "Sector 58, Noida",
    description: "A100, A Block, Sector 58, Noida, Uttar Pradesh<br /><strong>Rating: 5.0 (45 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-58/"
  },
  {
    image: img14,
    time: "2018",
    title: "Sector 142, Noida Expressway",
    description: "Plot No. 21 & 21A, Sector 142, Noida<br /><strong>Rating: 4.8 (259 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-noida-142/"
  },
  {
    image: img15,
    time: "2014",
    title: "Sector 68, Noida",
    description: "Grovy Optiva, Block A, Sector 68, Noida<br /><strongRating: 4.5 (101 reviews)",
    city: "Noida", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/noida/altf-grovy-optiva/"
  },
  {
    image: img16,
    time: "2013",
    title: "Financial District, Hyderabad",
    description: "Kapil Kavuri Hub. 144, Financial District, Nanakramguda, Hyderabad<br /><strong>Rating: 5.0 (1 review)",
    city: "Hyderabad", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/hyderabad/altf-financial-district/"
  },
  {
    image: img4,
    time: "2022",
    title: "alt.f Hitec City",
    description: "Hitec City, Hyderabad<br /><strong>Coming Soon",
    city: "Hyderabad", // Added city property
    link: "https://www.altfcoworking.com/coworking-space/hyderabad/altf-hitec-city/"
  },
];

export default function Timeline() {
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState("All Cities"); // State for selected city
  const [isMobile, setIsMobile] = useState(false); // New state for mobile view
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for custom dropdown open/close

  // Get unique cities for the dropdown
  const uniqueCities = ["All Cities", ...new Set(events.map(event => event.city))].sort();

  // Filtered events based on selectedCity
  const filteredEvents = events.filter(event => {
    if (selectedCity === "All Cities") {
      return true; // Show all events
    }
    // Filter by the 'city' property
    return event.city === selectedCity;
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIsMobile(); // Check on initial render
    window.addEventListener('resize', checkIsMobile); // Add listener for window resize

    return () => {
      window.removeEventListener('resize', checkIsMobile); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetItem = entry.target;
        if (entry.isIntersecting) {
          targetItem.classList.add("visible");
        } else {
          targetItem.classList.remove("visible");
        }
      });

      let maxVisibleYearBottom = 0;
      document.querySelectorAll('.timeline-item.visible').forEach(item => {
        const yearLabel = item.querySelector('.timeline-year');
        const mobileYearLabel = item.querySelector('.timeline-time.mobile');

        let currentYearElement = null;

        if (window.innerWidth >= 769 && yearLabel) {
          currentYearElement = yearLabel;
        } else if (window.innerWidth < 769 && mobileYearLabel) {
          currentYearElement = mobileYearLabel;
        }

        if (currentYearElement) {
          const yearRect = currentYearElement.getBoundingClientRect();
          const timelineRect = timelineElement.getBoundingClientRect();
          const yearBottomRelativeToTimeline = yearRect.bottom - timelineRect.top;

          if (yearBottomRelativeToTimeline > maxVisibleYearBottom) {
            maxVisibleYearBottom = yearBottomRelativeToTimeline;
          }
        }
      });

      timelineElement.style.setProperty('--glow-line-height', `${maxVisibleYearBottom}px`);

    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    filteredEvents.forEach((_, index) => {
      const el = itemRefs.current[index];
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedCity, filteredEvents, isMobile]);

  useEffect(() => {
    itemRefs.current = [];
  }, [filteredEvents]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="timeline-wrapper">

      {/* 🎨 Background Animated Visuals */}
      <div className="bg-visuals">
        {/* Floating cityscape illustration */}
        <svg className="city-animation" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="10" y="50" width="8" height="50" className="building"></rect>
          <rect x="25" y="40" width="10" height="60" className="building"></rect>
          <rect x="45" y="30" width="12" height="70" className="building"></rect>
          <rect x="65" y="45" width="8" height="55" className="building"></rect>
          <rect x="80" y="35" width="10" height="65" className="building"></rect>
        </svg>

        {/* Animated wave lines */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>

      {/* Filter Buttons / Custom Dropdown */}
      <div className="filter-container">
        {isMobile ? (
          <div className="custom-dropdown-mobile">
            <div
              className={`dropdown-header ${isDropdownOpen ? 'open' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedCity === "All Cities" ? "All Locations" : selectedCity}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
            </div>
            <div className={`dropdown-options ${isDropdownOpen ? 'show' : ''}`}>
              {uniqueCities.map((city) => (
                <div
                  key={city}
                  className={`dropdown-option ${selectedCity === city ? 'active' : ''}`}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {uniqueCities.map((city) => (
              <button
                key={city}
                className={`filter-button ${selectedCity === city ? "active" : ""}`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </>
        )}
      </div>

      {/* 🕒 Timeline Content */}
      <div className="timeline" ref={timelineRef}>
        {filteredEvents.map((event, index) => {
          const isRight = index % 2 === 0;
          return (
            <div
              key={index}
              className={`timeline-item ${isRight ? "right" : "left"}`}
              ref={el => itemRefs.current[index] = el}
            >
              <div className={`timeline-year ${isRight ? "timeline-year-right" : "timeline-year-left"}`}>{event.time}</div>
              <div className="timeline-time mobile">{event.time}</div>
              <div className={`timeline-side ${isRight ? "right" : "left"}`}>
                <div className={`timeline-card theme-${index % 4}`}>
                  <img src={event.image} alt={event.title} className="timeline-image" />
                  <h3>{event.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                  <a className="read-more" href={event.link}>READ MORE</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
