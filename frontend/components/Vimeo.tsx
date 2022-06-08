import Image from "next/image";
import Link from "next/link";
import { VimeoData } from "../types/interface";
import styles from './styles/Provider.module.css';

export default function Vimeo({ data }: { data: VimeoData }) {
    const html = data.html;
    const image = data.thumbnail_url;
    const CreateMarkUp = ({ html }: { html: any }) => {
        return <div dangerouslySetInnerHTML={{ __html: html }}></div>
    };
    const CreateThumbnail = ({ thumbnail_url }: { thumbnail_url: any }) => {
        return <div><Image priority src={thumbnail_url} alt="image" layout="intrinsic" width={data.thumbnail_width} height={data.thumbnail_height} ></Image></div>
    };
    return (
        <div className={styles.container}>
            <div >
                <div className={styles.vimeotitle}>
                    Vimeo
                </div>
                <div className={styles.list_wrapper}>
                    <ul >
                        <li> title: {data.title}</li>
                        <li> type: {data.type}</li>
                        <li> version: {data.version}</li>
                        <li> provider_name: {data.provider_name}</li>
                        <li> provider_url:<Link href={data.provider_url}><a> {data.provider_url} </a></Link></li>
                        <li> author_name: {data.author_name}</li>
                        <li> author_url:<Link href={data.author_url}><a>  {data.author_url} </a></Link></li>
                        <li> is_plus: {data.is_plus}</li>
                        <li> html: {data.html} <CreateMarkUp html={html} /> </li>
                        <li> width: {data.width} </li>
                        <li> height: {data.height} </li>
                        <li> duration: {data.duration} </li>
                        <li> description: {data.description}</li>
                        <li> thumbnail_url:<Link href={data.thumbnail_url}><a>  {data.thumbnail_url} </a></Link> <CreateThumbnail thumbnail_url={image}/>  </li>
                        <li> thumbnail_width: {data.thumbnail_width} </li>
                        <li> thumbnail_height: {data.thumbnail_height} </li>
                        <li> thumbnail_url_with_play_button: <Link href={data.thumbnail_url_with_play_button}><a> {data.thumbnail_url_with_play_button}</a></Link></li>
                        <li> upload_date: {data.upload_date}</li>
                        <li> video_id: {data.video_id}</li>
                        <li> uri: {data.uri}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}