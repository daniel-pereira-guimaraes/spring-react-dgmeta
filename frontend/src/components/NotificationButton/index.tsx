import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

export const NotificationButton = () => {
  return (
    <div className="dgmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  )
}