document.addEventListener("DOMContentLoaded", function() {
    console.log("PAGE LOADED");
// function position() {
//     console.log("PAGE LOADED");
//     let container = document.getElementsByName('body')
//     let dispatch = d3.dispatch('active', 'progress');
//     let sections = document.getElementsByClassName("waves")
//     let sectionPositions
//     let currentIndex = -1
//     let containerStart = 0;

//     let pos = window.pageYOffset - 300 - containerStart;
//     console.log("pos");
//     let sectionIndex = d3.bisect(sectionPositions, pos);
//     sectionIndex = Math.min(sections.size()-1, sectionIndex);
//     if (currentIndex !== sectionIndex){
//       dispatch.call('active', this, sectionIndex);
//       currentIndex = sectionIndex;
//     }
//     let prevIndex = Math.max(sectionIndex - 1, 0);
//     let prevTop = sectionPositions[prevIndex]
//     let progress = (pos - prevTop) / (sectionPositions[sectionIndex]   - prevTop);
//     dispatch.call('progress', this, currentIndex, progress)
//   }
});
