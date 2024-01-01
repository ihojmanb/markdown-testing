import "./App.css";
import Markdown from "react-markdown";

let content = [
  "* חינם לילדים מתחת לגובה מטר ומבקרים נכים הזקוקים לסיוע",
  "* ביום ביקורכם נא להציג את כרטיס הסמארטפון של Tiqets ואת הזמנת אתר גארדהלנד בכניסה * יש להוריד את האפליקציה Qoda - Fila Virtuale לשריין תור באטרקציות",
  "* ניתן לדלג רק על תור הכרטוס הראשוני בכניסה הראשית * כרטיסים ל-Gardaland + SEA Life 1 Day Entrance יימכרו ב-47 במקום 49 יורו לזמן מוגבל!",
  "**הגעה:** * רכבת: קחו את הרכבת לפסקיירה דל גארדה, אוטובוס הסעות חינם יוצא מתחנת הרכבת לגארדלנד כל 30 דקות.",
  "* הורד את האפליקציה Qoda - Fila Virtuale כדי לשמור את מקומך ברכיבות עבור [iOS](https://apps.apple.com/us/app/qoda-fila-da-casa-supermercato/id1511907598) או [Android](https://play.google.com/store/apps/details?id=app.qoda&hl=iw)",
];
function App() {
  var text = "attraction 337a6e0f-ef52-4c58-a57f-49f60ae08660";
  return (
    <div className="App" dir="rtl">
      <Markdown>{text}</Markdown>
      {content.map((x) => (
        <Markdown>{x}</Markdown>
      ))}
    </div>
  );
}

export default App;
