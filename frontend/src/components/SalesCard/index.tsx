import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { NotificationButton } from "../NotificationButton";
import './styles.css';

interface ISale {
  id: number;
  sellerName: string;
  visited: number;
  deals: number;
  amount: number;
  date: string;
}

type TSales = ISale[];

export const SalesCard = () => {

  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365))); // Hoje - 365 dias?
  const [maxDate, setMaxDate] = useState(new Date());
  const [sales, setSales] = useState<TSales>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await new Promise(((r) => { setTimeout(r, 3000)}));
      const d1 = minDate.toISOString().slice(0, 10);
      const d2 = maxDate.toISOString().slice(0, 10);
      fetch(`http://localhost:8080/sales/?minDate=${d1}&maxDate=${d2}`)
        .then(result => result.json())
        .then(json => {
          setIsLoading(false);
          setSales(json.content)
        });
    }
    fetchData();
  }, [minDate, maxDate]);

  const fmtDate = (s: string) => {
    return s.split('-').reverse().join('/');
  }
  
  return (
    <div className="dgmeta-sales-card">

      <h2 className="dgmeta-sales-card-title">
        Vendas
      </h2>

      <div className="dgmeta-sales-card-params">
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
        {isLoading ? <h2>Pesquisando...</h2> :
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
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td className="dgmeta-sales-card-show-992">{sale.id}</td>
                  <td className="dgmeta-sales-card-show-576">{fmtDate(sale.date)}</td>
                  <td>{sale.sellerName}</td>
                  <td className="dgmeta-sales-card-show-992">{sale.visited}</td>
                  <td className="dgmeta-sales-card-show-992">{sale.deals}</td>
                  <td>{sale.amount}</td>
                  <td>
                    <div className="dgmeta-sales-card-notification-container">
                      <NotificationButton id={sale.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        }
      </div>
    </div>
  );
};