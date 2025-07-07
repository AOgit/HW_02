interface Props {
    url: string;
    alt?: string;
}

export default function Card(props: Props){
    const {url, alt} = props;
    // return <img src='./cat.jpg' alt={alt}/> // вариант 1
    return <img src={url} alt={alt}/>
     
     
}