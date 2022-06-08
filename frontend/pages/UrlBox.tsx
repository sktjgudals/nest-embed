import styles from "../styles/UrlBox.module.css";

import { useState } from "react";
import { toast } from "react-toastify";
import { Data } from "../types/interface";

export default function UrlBox({ setProvider,setData }: { setProvider :(provider:string)=>void,setData:(data:Data)=>void}) {
    const [key, setKey] = useState<string>("");
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <input
                    className={styles.input}
                    placeholder="URL 입력"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                            if (key.includes("http://") || key.includes("https://")) {
                                const res = await fetch(`${process.env.HOST}/embed`, {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    }, method: "POST", body: JSON.stringify({ url: key })
                                });
                                const result = await res.json();
                                if (result.error) {
                                    return toast.error(result.error);
                                }
                                if (result.provider_name) {
                                    setProvider(result.provider_name);
                                    setData(result)
                                } else {
                                    toast.error("unexpected error");
                                }
                            } else {
                                toast.error("URL 형식에 맞게 입력해주세요");
                            }
                        }
                    }}
                />
                <button
                    className={styles.button}
                    aria-label="SearchButton"
                    onClick={async () => {
                        if (key.includes("http://") || key.includes("https://")) {
                            const res = await fetch(`${process.env.HOST}/embed`, {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }, method: "POST", body: JSON.stringify({ url: key })
                            });
                            const result = await res.json();
                            if (result.error) {
                                return toast.error(result.error);
                            }
                            if (result.provider_name) {
                                setProvider(result.provider_name);
                                setData(result)
                            } else {
                                toast.error("unexpected error");
                            }
                        } else {
                            toast.error("URL 형식에 맞게 입력해주세요");
                        }
                    }
                    }
                >
                    확인
                </button>
            </div>
        </div>
    );
}
