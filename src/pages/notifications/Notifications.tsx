import { useState } from 'react';
import '../notifications/notifications.css'

function Notifications() {
    
    const [selectedNotification, setSelectedNotification] = useState<number | null>(0);

    const toggleDescription = (index: number) => {
        setSelectedNotification(index === selectedNotification ? null : index);
    };

    const notificationsData = [
        { title: 'NOTIFICAÇÃO 1', description: 'Descrição detalhada da notificação 1.' },
        { title: 'NOTIFICAÇÃO 2', description: 'Descrição detalhada da notificação 2.' },
        { title: 'NOTIFICAÇÃO 3', description: 'Descrição detalhada da notificação 3.' },
        { title: 'NOTIFICAÇÃO 4', description: 'Descrição detalhada da notificação 4.' },
        { title: 'NOTIFICAÇÃO 5', description: 'Descrição detalhada da notificação 5.' },
    ];

    return (
        <div className="main-content">
            <div className="notification-list">
                {notificationsData.map((notification, index) => (
                    <div
                        key={index}
                        className={`notification ${selectedNotification === index ? 'selected' : ''}`}
                        onClick={() => toggleDescription(index)}
                    >
                        <div className="notification-title">{notification.title}</div>
                        <div
                            className="notification-description"
                            style={{ display: selectedNotification === index ? 'block' : 'none' }}
                        >
                            {notification.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications