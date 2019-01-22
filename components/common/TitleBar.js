import Link from 'next/link'
import { links } from '../../data/links'
export default () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Next.js & React course</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {
                    links.map(link => {
                        return <li key={link.url}><Link href={link.url}><a>{link.name}</a></Link></li>
                    })
                }
            </ul>
        </div>
    </nav>
)