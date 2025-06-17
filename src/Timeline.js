import React, { useEffect, useRef } from "react";
import './timeline.css';

// Images (imports remain the same)
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


const events = [
  {
    image: img1,
    time: "2025",
    title: "Sohna Road, Gurgaon",
    description: "₹8,500 / seat<br />Near Subhash Chowk (100m)<br />Rating: 4.9 (85 reviews)",
    link: "#sohna"
  },
  {
    image: img2,
    time: "2024",
    title: "Golf Course Road, Gurgaon",
    description: "₹14,000 / seat<br />2 mins from Metro (Sec 42-43)<br />Rating: 4.9 (99 reviews)",
    link: "#golfcourse"
  },
  {
    image: img3,
    time: "2023",
    title: "Success Towers, Golf Course Ext.",
    description: "₹7,000 / seat<br />Free Parking, Dual Deck Terrace<br />Rating: 4.7 (99 reviews)",
    link: "#successtowers"
  },
  {
    image: img4,
    time: "2022",
    title: "Global Business Park, MG Road",
    description: "₹12,000 / seat<br />Near Guru Dronacharya Metro<br />Rating: 4.8 (57 reviews)",
    link: "#gbp"
  },
  {
    image: img5,
    time: "2021",
    title: "JMD Empire Square, MG Road",
    description: "₹13,000 / seat<br />300m from Sikanderpur Metro<br />Rating: 4.5 (297 reviews)",
    link: "#jmd"
  },
  {
    image: img6,
    time: "2020",
    title: "MGF Megacity Mall, MG Road",
    description: "₹10,000 / seat<br />5-min walk to Sikanderpur Metro<br />Rating: 5.0 (19 reviews)",
    link: "#mgf"
  },
  {
    image: img8,
    time: "2019",
    title: "Mohan Cooperative, Delhi",
    description: "₹8,000 / seat<br />5 min from NSIC Okhla Metro<br />Newly Launched",
    link: "#mohan"
  },
  {
    image: img9,
    time: "2018",
    title: "Okhla, Delhi",
    description: "₹9,000 / seat<br />5 min from NSIC Okhla Metro<br />Rating: 4.9 (188 reviews)",
    link: "#okhla"
  },
  {
    image: img10,
    time: "2017",
    title: "Barakhamba Road, Delhi",
    description: "₹15,000 / seat<br />150m from Barakhamba Metro<br />Rating: 4.9 (51 reviews)",
    link: "#barakhamba"
  },
  {
    image: img13,
    time: "2016",
    title: "Connaught Place, Delhi",
    description: "₹8,000 / seat<br />5 min from NSIC Okhla Metro<br />Coming Soon",
    link: "#cp"
  },
  {
    image: img14,
    time: "2015",
    title: "Sector 142, Noida Expressway",
    description: "₹7,000 / seat<br />5-min walk to Metro<br />15 Days rent-free<br />Rating: 4.8 (259 reviews)",
    link: "#142noida"
  },
  {
    image: img15,
    time: "2014",
    title: "Sector 68, Noida",
    description: "₹7,000 / seat<br />Close to Sector 62 Metro<br />15 Days rent-free<br />Rating: 4.5 (101 reviews)",
    link: "#68noida"
  },
  {
    image: img16,
    time: "2013",
    title: "Financial District, Hyderabad",
    description: "₹8,500 / seat<br />5-min walk from Metro<br />Newly Launched<br />Rating: 5.0 (1 review)",
    link: "#hyderabad"
  }
];

export default function Timeline() {
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetItem = entry.target;
        const index = itemRefs.current.indexOf(targetItem);

        if (entry.isIntersecting) {
          targetItem.classList.add("visible");
        } else {
          // Remove visible class when leaving viewport
          targetItem.classList.remove("visible");
        }

        // --- Logic for the glowing line height ---
        if (timelineElement) {
          let maxVisibleYearBottom = 0; // Tracks the lowest visible year label's position

          // Iterate through all items to find the lowest visible one
          itemRefs.current.forEach(item => {
            if (item && item.classList.contains('visible')) {
              // Target the timeline-year element
              const yearLabel = item.querySelector('.timeline-year');
              const mobileYearLabel = item.querySelector('.timeline-time.mobile');

              let currentYearElement = null;

              // Determine which year label is currently displayed (desktop or mobile)
              if (window.innerWidth >= 769 && yearLabel) { // Desktop view
                currentYearElement = yearLabel;
              } else if (window.innerWidth < 769 && mobileYearLabel) { // Mobile view
                currentYearElement = mobileYearLabel;
              }

              if (currentYearElement) {
                // Calculate the year label's bottom position relative to the timeline's top
                const yearRect = currentYearElement.getBoundingClientRect();
                const yearBottomRelativeToTimeline = yearRect.bottom - timelineElement.getBoundingClientRect().top;

                if (yearBottomRelativeToTimeline > maxVisibleYearBottom) {
                  maxVisibleYearBottom = yearBottomRelativeToTimeline;
                }
              }
            }
          });

          // Set the height of the ::after pseudo-element using a CSS variable
          // We'll set this property on the .timeline element itself
          timelineElement.style.setProperty('--glow-line-height', `${maxVisibleYearBottom}px`);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }); // Adjust threshold and rootMargin as needed

    itemRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* 🕒 Timeline Content */}
      <div className="timeline" ref={timelineRef}>
        {events.map((event, index) => {
          const isRight = index % 2 === 0;
          return (
            <div
              key={index}
              className={`timeline-item ${isRight ? "right" : "left"}`}
              ref={el => itemRefs.current[index] = el}
            >
              {/* This line is now commented out, removing the dot */}
              {/* <div className="timeline-dot" /> */}
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