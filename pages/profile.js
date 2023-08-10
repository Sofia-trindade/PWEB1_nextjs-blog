import Image from 'next/image';
import Head from 'next/head';

export default function Profile () {
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>

        <Image
                src="/images/profile.jpg" 
                height={144}
                width={144}
                alt="Your Profile" 
            />
            </>
    );
}
