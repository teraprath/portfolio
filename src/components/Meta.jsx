import { Helmet } from "react-helmet"
import AvatarImage from "../assets/avatar.png"

function Meta() {
    return (
        <Helmet>
            <title>Teraprath Thuansuriya</title>
            <meta name="description" content="Portfolio"/>
            <meta name="keywords" content="Portfolio, Developer, Web, Engineer, Teraprath, Thuansuriya"/>
            <meta name="author" content="Teraprath Thuansuriya"/>
            <meta property="og:title" content="Teraprath Thuansuriya" />
            <meta property="og:description" content="Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={AvatarImage} />
            <meta property="og:url" content={window.location.href} />
        </Helmet>
    )
}

export default Meta