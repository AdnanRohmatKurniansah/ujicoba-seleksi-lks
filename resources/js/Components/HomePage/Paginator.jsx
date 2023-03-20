import { Link } from '@inertiajs/react';

const Paginator = ({ meta }) => {
    console.log(meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div>
            <div className="btn-group">
                {prev && <Link href={prev} className="btn">«</Link>}
                <Link className="btn">{current}</Link>

                {next && <Link href={next} className="btn">»</Link>}
            </div>
        </div>
    )
}
export default Paginator