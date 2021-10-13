// our-domain.com/news/
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/next1">
                        Next 1
                    </Link>
                </li>
                <li>Next 2</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;