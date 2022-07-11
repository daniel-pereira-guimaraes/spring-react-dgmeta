import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { NotificationButton } from "../NotificationButton";
import './styles.css';

export const SalesCard = () => {

  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365))); // Hoje - 365 dias?
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <div className="dgmeta-sales-card">

      <h2 className="dgmeta-sales-card-title">
        Vendas
      </h2>

      <div>
        <div className="dgmeta-sales-card-input-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dgmeta-sales-card-input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dgmeta-sales-card-input-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dgmeta-sales-card-input"
            dateFormat="dd/MM/yyyy"
          />
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