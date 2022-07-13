import React from 'react';
import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

interface INotificationButtonProps {
  id: number;
}

export const NotificationButton: React.FC<INotificationButtonProps> = ({id}) => {
  
  const handleClick = () => {
    const url = `http://localhost:8080/sales/${id}/notification`;
    fetch(url)
      .then(result => {
        if (result.ok)
          alert('Notificação enviada com sucesso!');
        else
          alert('Notificação NÃO enviada.\n' + result.status + ': ' + result.statusText);
      })
      .catch(error => {
        if (error instanceof Error)
          alert(error.message);
        else {
          console.error(error);
          alert('Erro desconhecido ao enviar a notificação.');
        }
      })
  }

  return (
    <div className="dgmeta-red-btn">
      <img src={icon} alt="Notificar" onClick={handleClick} />
    </div>
  )
}