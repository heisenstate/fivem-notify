const icons = {
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="#19519B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"/>
    </svg>`,
    error: `<svg viewBox="0 0 24 24" fill="none" stroke="#E53935" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="#43A047" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="8" stroke-width="3"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
    </svg>`,
    action: `<svg viewBox="0 0 24 24" fill="none" stroke="#FB8C00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3"/>
    </svg>`
};

window.addEventListener('message', function(event) {
    const data = event.data;

    if (!data.type || !data.title || !data.message) return;
    if (!icons[data.type]) return;

    const container = document.getElementById('notifications');

    const notification = document.createElement('div');
    notification.classList.add('notification', data.type);

    const iconEl = document.createElement('div');
    iconEl.classList.add('notification-icon');
    iconEl.innerHTML = icons[data.type];

    const content = document.createElement('div');
    content.classList.add('notification-content');

    const title = document.createElement('div');
    title.classList.add('notification-title');
    title.textContent = data.title;

    const message = document.createElement('div');
    message.classList.add('notification-message');
    message.textContent = data.message;

    const barTrack = document.createElement('div');
    barTrack.classList.add('notification-bar-track');

    const bar = document.createElement('div');
    bar.classList.add('notification-bar');

    content.appendChild(title);
    content.appendChild(message);
    notification.appendChild(iconEl);
    notification.appendChild(content);
    notification.appendChild(barTrack);
    notification.appendChild(bar);
    container.appendChild(notification);

    setTimeout(() => {
        removeNotification(notification);
    }, 4000);
});

function removeNotification(notification) {
    notification.style.animation = 'slideOut 0.65s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards';

    setTimeout(() => {
        notification.remove();
    }, 650);
}