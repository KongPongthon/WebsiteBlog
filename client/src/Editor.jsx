import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({value,onChange}){
    const modules = {
        toolbar : [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],            
            ['link'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],            
            [{ 'align': [] }],          
            ['clean']
          ]
    }
    return(
        <ReactQuill value={value} theme={'snow'} onChange={onChange} modules={modules}/>
    )

}