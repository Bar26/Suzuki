import { HashLink as Link } from 'react-router-hash-link';

export function PurchaseProcess() {
    return <section className="purchase-process-container">

        {/* <img src="https://res.cloudinary.com/debmbjvbh/image/upload/v1666458679/suzuki/IMG-20220622-WA0023_slfpye_qlt8r8.jpg" /> */}
        <h2 className="title">
            תהליך רכישה
        </h2>
        <p className="intro">
            <span>באולם התצוגה בעפולה תוכלו להתרשם ממגוון דגמי סוזוקי, לשבת עם </span>
            <Link to="metting-id">  נציג מכירות </Link>
            <span>ולקבל מידע על הדגם שמעניין אתכם לרכוש, אפשרויות </span>
            <Link to="fund-id" > תשלום ומימון </Link>
            <span>, אפשרות </span>
            <Link to="trade-id">לטרייד אין </Link>
            <span>על הרכב שברשותכם, מבצעים עכשוויים, </span>
            <Link to="deliver-id"> זמן אספקה, </Link>
            <span >וגם לבצע </span>
            <Link to="text-drive-id">
                נסיעת מבחן.
            </Link>



        </p>

        <section className="purchase-info-cards">

            <article id="meeting-id" className="meeting">
                <h2>פגישה עם נציג מכירות</h2>
                <p>
                    <ul>
                        <li>ניתן לקבוע פגישה בטלפון 04-6421771 או להשאיר פרטים ונחזור אליכם בהקדם. (להשארת פרטים לחץ כאן)</li>
                        <li>ניתן להגיע באופן עצמאי לסוכנות, עפולה, רח' המלאכה 7, בימים א' - ה' בין השעות 9:00-19:00 ו' - 9:00-13:00.</li>
                    </ul>
                </p>


            </article>

            <article id="fund-id" className="fund">
                <h2>אפשרויות תשלום ומימון</h2>
                <p>

                    <ul>
                        <li>הלוואה של עד 100% מימון שנפרסת על פני 3, 4, או 5 שנים (עד 60 תשלומים חודשיים) .</li>
                        <li>הלוואה של עד 90% (10% מקדמה) - פריסה ל-3 שנים כאשר משאירים עד 50% לסוף התקופה (הלוואת "בלון").</li>
                    </ul>
                    <p>בכל מסלול שתבחרו, ניתן 'להזרים' כסף בכל שלב ולהקטין את ההלוואה, או לחילופין - לסגור אותה.

                        אופציה נוספת היא החלפת הרכב הקיים ברכב חדש בכל שלב בתקופה, ואנחנו נדאג לסגור את ההלוואה הקיימת, בהתאם לשווי רכב הטרייד אין ולהתחיל עסקה חדשה על רכב חדש - גלגול עסקה.</p>
                </p>

            </article>

            <article id="trade-id" className="trade">
                <h2>טרייד אין</h2>
                <p>
                    כחלק מתהליך הקנייה וכשירות ללקוחות, הרכב הישן יישאר אצלכם עד קבלת הרכב החדש.

                    *ניתן לבצע טרייד אין על כל סוגי הרכבים.
                </p>
            </article>

            <article id="deliver-id" className="deliver">
                <h2>זמן אספקה</h2>
                <p>
                    מרגע תשלום מלא, ובתנאי שהרכב שהוזמן קיים במלאי, זמן האספקה לא יעלה על 14 ימי עסקים.
                </p>

            </article>

            <article id="text-drive-id" className="test-drive">
                <h2>נסיעת מבחן</h2>
                <p>

                    רוב דגמי סוזוקי זמינים לנסיעת מבחן בכל עת בסוכנות.

                    דגמים נוספים יהיו זמינים לנסיעת מבחן לאחר תיאום יום ושעה אצל נציג מכירות.

                    לתיאום פגישה ונסיעת מבחן לחץ כאן.
                </p>
            </article>

        </section>
    </section>
}