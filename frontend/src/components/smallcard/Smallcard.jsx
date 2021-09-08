import "./smallcard.css";

export default function Smallcard() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Workouts</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://static.thenounproject.com/png/1343935-200.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Arms</span>
            
          </div>
         
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViMVameMRkTttP7WeGx3yjITbCzbce3G8GQ&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chest</span>
            
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/leg-muscle-1408450-1191286.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Legs</span>
            
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://cdn3.iconfinder.com/data/icons/workouts/500/back-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Back</span>
          </div>
          
        </li>
        <li className="widgetSmListItem">
          <img
          src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shoulders</span>
          </div>
          
        </li>
      </ul>
    </div>
  );
}