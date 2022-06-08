import Link from "next/link";
import { TwitterData } from "../types/interface";
import styles from './styles/Provider.module.css';

export default function Twitter({ data }: { data: TwitterData }) {
    const html = data.html;
    const CreateMarkUp = ({ html }: { html: any }) => {
        return <div dangerouslySetInnerHTML={{ __html: html }}></div>
    };
    return (
        <div className={styles.container}>
            <div >
                <div className={styles.twittertitle}>
                    Twitter
                </div>
                <div className={styles.list_wrapper}>
                <ul >
                    <li> url:<Link href={data.url}><a>  {data.url} </a></Link>  </li>
                    <li> type: {data.type}   </li>
                    <li> provider_name: {data.provider_name}  </li>
                    <li> provider_url:<Link href={data.provider_url}><a> {data.provider_url}  </a></Link>  </li>
                    <li> author_name: {data.author_name}  </li>
                    <li> author_url:<Link href={data.author_url}><a>  {data.author_url} </a></Link> </li>
                    <li> cache_age: {data.cache_age}   </li>
                    <li> html: {data.html} <CreateMarkUp html={html} /> </li>
                    <li> width: {data.width} </li>
                    <li> height: {data.height} </li>
                    <li> version: {data.version}</li>
                </ul>
                </div>
            </div>
        </div>
    )
}