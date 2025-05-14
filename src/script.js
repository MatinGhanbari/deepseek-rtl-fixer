const apply_button = document.getElementById("applyStylesBtn");
const reset_button = document.getElementById("resetStylesBtn");

apply_button.addEventListener("click", async () => {
  const css = `
    .ds-markdown.ds-markdown--block {
      direction: rtl;
      font-family: "Vazirmatn", "IRANSans", "Tahoma", sans-serif;
    }

    .md-code-block {
      direction: ltr;
    }

    .md-code-block-light {
      direction: ltr;
    }
  `;

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css,
  });
});

reset_button.addEventListener("click", async () => {
  const css = `
    .ds-markdown.ds-markdown--block {
      direction: ltr;
      DeepSeek-CJK-patch, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Oxygen, "Open Sans", sans-serif;
    }

    .md-code-block {
      direction: ltr;
    }

    .md-code-block-light {
      direction: ltr;
    }
  `;

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css,
  });
});
