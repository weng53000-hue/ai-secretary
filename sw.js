 // 試跑版：模擬背景通知監聽
self.addEventListener('push', function(event) {
    let title = 'AI 秘書提醒';
    let body = '您有一個專案或行程時間到囉！';
    
    if (event.data) {
        try {
            const data = event.data.json();
            title = data.title || title;
            body = data.body || body;
        } catch(e) {
            body = event.data.text();
        }
    }

    const options = {
        body: body,
        icon: 'icon.png',
        badge: 'icon.png',
        vibrate:,
        requireInteraction: true // 通知會一直停在畫面上直到你點掉
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
