import "./bigcard.css";

export default function Bigcard() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Exercise Progression</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Exercise</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Old </th>
          <th className="widgetLgTh">New</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">Hammer Curl</span>
          </td>
          <td className="widgetLgDate">1 Sept 2021</td>
          <td className="widgetLgAmount">15 lbs</td>
          <td className="widgetLgAmount">20 lbs</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Deadlift</span>
          </td>
          <td className="widgetLgDate">28 Aug 2021</td>
          <td className="widgetLgAmount">135 lbs</td>
          <td className="widgetLgAmount">155 lbs</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">Squat</span>
          </td>
          <td className="widgetLgDate">20 Aug 2021</td>
          <td className="widgetLgAmount">95 lbs</td>
          <td className="widgetLgAmount">105 lbs</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">Lat pulldown</span>
          </td>
          <td className="widgetLgDate">15 Aug 2021</td>
          <td className="widgetLgAmount">20 lbs</td>
          <td className="widgetLgAmount">25 lbs</td>
        </tr>
      </table>
    </div>
  );
}