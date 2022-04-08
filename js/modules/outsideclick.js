export default function clickOutside(element, events, callback) {
    const html = document.documentElement;
    const inside = "data-inside";

    if (!element.hasAttribute(inside)) {
      events.forEach((userEvent) => {
        setTimeout( () => html.addEventListener(userEvent, handleClickOutside));
      });

      element.setAttribute(inside, "");
    }

    function handleClickOutside(event) {
      if (!element.contains(event.target)) {
        events.forEach((userEvent) => {
            html.removeEventListener(userEvent, handleClickOutside);
          });
        element.removeAttribute(inside);
        callback();
      }
    }
  }