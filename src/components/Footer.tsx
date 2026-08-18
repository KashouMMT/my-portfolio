import { useTranslation } from "react-i18next";

import "../assets/css/portfolio-footer.css"

const Footer = () => {
    const { t } = useTranslation();

    return <div className="site-footer">
        <span className="site-content"
        dangerouslySetInnerHTML={{__html: t("footer.footer_description")}} />
    </div>
}

export default Footer; 