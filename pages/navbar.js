import Link from 'next/link';

const Nabvbar = () =>(
<div>

    <ul>
        <li>
            <Link href='/'><a>Home</a></Link>
        </li>
        <li>
            <Link href='/about'><a>About</a></Link>
        </li>
    </ul>
    <style jsx>{`
        ul{
            margin:14px;
            list-style:none;
            display:flex;
        }
        li{
            font-size:18px;
            margin-right:30px;
        }
    
    `
    
    }</style>
</div>
);


export default Nabvbar;