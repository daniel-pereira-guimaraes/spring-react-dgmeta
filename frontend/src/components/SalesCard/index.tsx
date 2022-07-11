import { NotificationButton } from "../NotificationButton";
import './styles.css';

export const SalesCard = () => {
  return (
    <div className="dgmeta-sales-card">

      <h2 className="dgmeta-sales-card-title">
        Vendas
      </h2>

      <div>
        <div className="dgmeta-sales-card-input-container">
          <input className="dgmeta-sales-card-input" type="date" value="2022-07-01" />
        </div>
        <div className="dgmeta-sales-card-input-container">
          <input className="dgmeta-sales-card-input" type="date" value="2022-07-31" />
        </div>
      </div>

      <div>
        <table className="dgmeta-sales-card-table">
          <thead>
            <tr>
              <th className="dgmeta-sales-card-show-992">ID</th>
              <th className="dgmeta-sales-card-show-576">Data</th>
              <th>Vendedor</th>
              <th className="dgmeta-sales-card-show-992">Visitas</th>
              <th className="dgmeta-sales-card-show-992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>

          <tr>
              <td className="dgmeta-sales-card-show-992">#123</td>
              <td className="dgmeta-sales-card-show-576">09/07/2022</td>
              <td>Fulano de tal</td>
              <td className="dgmeta-sales-card-show-992">15</td>
              <td className="dgmeta-sales-card-show-992">11</td>
              <td>R$ 456,56</td>
              <td>
                <div className="dgmeta-sales-card-notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="dgmeta-sales-card-show-992">#123</td>
              <td className="dgmeta-sales-card-show-576">09/07/2022</td>
              <td>Fulano de tal</td>
              <td className="dgmeta-sales-card-show-992">15</td>
              <td className="dgmeta-sales-card-show-992">11</td>
              <td>R$ 456,56</td>
              <td>
                <div className="dgmeta-sales-card-notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="dgmeta-sales-card-show-992">#123</td>
              <td className="dgmeta-sales-card-show-576">09/07/2022</td>
              <td>Fulano de tal</td>
              <td className="dgmeta-sales-card-show-992">15</td>
              <td className="dgmeta-sales-card-show-992">11</td>
              <td>R$ 456,56</td>
              <td>
                <div className="dgmeta-sales-card-notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
};