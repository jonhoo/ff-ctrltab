browser.commands.onCommand.addListener(async (command) => {
  let num = parseInt(command.substr(9, 10)) - 1;
  let tabs = await browser.tabs.query({currentWindow: true});
  if (tabs.length < num) {
    return;
  }
  if (num == 8) {
    num = tabs.length - 1;
  }
  browser.tabs.update(tabs[num].id, {active: true});
});
