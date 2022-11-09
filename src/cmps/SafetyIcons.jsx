export function SafetyIcons({ safetyIcons }) {
    return <section className="safety-icons-container">
        <header className="safety-header">
            <span className="title">מערכות בטיחות מתקדמות</span>
            <span className="content">מערכת בטיחות מקורית ומתקדמת, משולבת מצלמה ורדאר וכוללת בלימה אוטונומית, התראה אקטיבית בעת סטייה מנתיב, זיהוי שטח מת, התראת תנועה חוצה מאחור והתראה על עייפות נהג.</span>
        </header>
        <section className="safety-grid">
            {safetyIcons.map(safety =>
                <section className="safety-icon">
                    <img className="icon" src={safety.img} alt="safety-icon" />
                    <span className="safety-title">{safety.title}</span>
                </section>
            )}
        </section>


    </section>
}