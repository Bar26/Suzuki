import { useEffect } from "react";
import { Link } from "react-router-dom";

export function PurchaseProcess() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <section className="purchase-process-container">

        <h2 className="title">
            תהליך רכישה
        </h2>
        <p className="intro">
            באולם התצוגה בעפולה תוכלו להתרשם ממגוון דגמי סוזוקי, לשבת עם נציג מכירות
            ולקבל מידע על הדגם שמעניין אתכם לרכוש, אפשרויות תשלום ומימון,
            , אפשרות
            לטרייד אין
            על הרכב שברשותכם, מבצעים עכשוויים,
            זמן אספקה,
            וגם לבצע
            נסיעת מבחן.
        </p>

        <section className="purchase-info-cards">

            <article className="meeting">
                <h2>פגישה עם נציג מכירות</h2>
                <p>
                    <ul>
                        <li>ניתן לקבוע פגישה בטלפון 04-6421771 או להשאיר פרטים ונחזור אליכם בהקדם. <Link to="/contact-us">(להשארת פרטים לחץ כאן)</Link></li>
                        <li>ניתן להגיע באופן עצמאי לסוכנות, עפולה, רח' המלאכה 7, בימים א' - ה' בין השעות 9:00-19:00 ו' - 9:00-13:00.</li>
                    </ul>
                </p>


            </article>

            <article className="fund">
                <h2>אפשרויות תשלום ומימון</h2>
                <p>

                    <ul>
                        <li>הלוואה של עד 100% מימון שנפרסת על פני 3, 4, או 5 שנים (עד 60 תשלומים חודשיים) .</li>
                        <li>הלוואה של עד 100% בפריסה ל3, 4 או 5 שנים, כאפשר יש אפשרות להשאיר עד 50% לסוף התקופה (הלוואת "בלון").</li>
                    </ul>
                    <p>בכל מסלול שתבחרו, ניתן 'להזרים' כסף בכל שלב ולהקטין את ההלוואה, או לחילופין - לסגור אותה.

                        אופציה נוספת היא החלפת הרכב הקיים ברכב חדש בכל שלב בתקופה, ואנחנו נדאג לסגור את ההלוואה הקיימת, בהתאם לשווי רכב הטרייד אין ולהתחיל עסקה חדשה על רכב חדש - גלגול עסקה.</p>
                </p>

            </article>

            <article className="trade">
                <h2>טרייד אין</h2>
                <p>
                    בסוכנות סוזוקי עפולה ניתן לבצע טרייד אין על כל סוגי הרכבים. כחלק מתהליך הקנייה וכשירות ללקוחות, הרכב הישן יישאר אצלכם עד קבלת הרכב החדש. 
                </p>
            </article>

            <article className="deliver">
                <h2>זמן אספקה</h2>
                <p>
                    מרגע תשלום מלא, ובתנאי שהרכב שהוזמן קיים במלאי, זמן האספקה לא יעלה על 14 ימי עסקים.
                </p>

            </article>

            <article className="test-drive">
                <h2>נסיעת מבחן</h2>
                <p>

                    רוב דגמי סוזוקי זמינים לנסיעת מבחן בכל עת בסוכנות.

                    דגמים נוספים יהיו זמינים לנסיעת מבחן לאחר תיאום יום ושעה אצל נציג מכירות.

                    <Link to="/contact-us">לתיאום פגישה ונסיעת מבחן לחץ כאן.</Link>
                </p>
            </article>

        </section>
    </section>
}