const tabsContainer = document.querySelector('.tabs-container');
const tabsList = tabsContainer.querySelector('ul');
const tabButtons = tabsList.querySelectorAll('a');
const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');
tabButtons.forEach((tab, index) =>  {
  if (index === 0) {
    tab.classList.add('active');
  } else {
    tabPanels[index].setAttribute("hidden", "");
  }
})

tabsContainer.addEventListener('click', (e) => {
  const clickedTab = e.target.closest('a');
  console.log(clickedTab);
  e.preventDefault();
});