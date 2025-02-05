
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer" id="footer">
            <h4>About Us</h4>
            <p>
                Discipline and Preparation: Good college courses prepare you for life’s
                challenges. Learning to meet deadlines for homework translates to
                meeting work deadlines in the real world. Innovation Culture: A great
                university fosters a culture of innovation. Everyone, from students to
                professors, contributes to making the campus better. It’s a place where
                ideas thrive and futures are shaped
            </p>
            <div className="icon">
                <FacebookIcon className="sites" />
                <XIcon className="sites" />
                <InstagramIcon className="sites" />
                <LinkedInIcon className="sites" />
            </div>
        </div>
    )
}
export default Footer;