import { useRouter } from 'next/router';
// our-domain.com/news/detail

function DetailPage() {
    const router = useRouter();

    console.log(router.query.detail);
    return <h1>Detail Page</h1>
}

export default DetailPage;