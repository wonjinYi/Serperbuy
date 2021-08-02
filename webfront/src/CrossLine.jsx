import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, Button, message } from 'antd';
import CrossLineVideo from './img/CrossLineVideo.gif';

const { TextArea } = Input;

const CrossLine = () => {
    const [code, setCode] = useState('가져오는 중');
    const [metadata, setMetadata] = useState({
        version: '가져오는 중',
        updateDate: '가져오는 중',
    });
    const codeRef = useRef();

    const [bg, setBg] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://script.google.com/macros/s/AKfycbwOdYkhXblo8IqLeGwjC_7dEGsYvmE35lhsOABjUkfowUiD9gFMw4UeOKbiSDEDiYwX/exec');
            if (data.status === 'success') {
                setCode(data.data[0].code);
                setMetadata({
                    version: data.data[0].version,
                    updateDate: data.data[0].updateDate,
                })
            } else {
                setCode('뭔가 잘못됐습니다. 새로고침후 재시도해주세요.');
                console.error('뭔가이상함')
            }
        }
        getData();
    }, []);

    const onCopy = () => {
        var copyText = codeRef.current.resizableTextArea.textArea;
        copyText.select();
        document.execCommand("Copy");
        message.destroy();
        message.success('잘 복사되었습니다');
    };

    const onBack = () => {
        setBg(!bg);
    }

    return (

        <CrossLineWrap>
            
                <ImgWrap style={{opacity:`${ bg ? '1' : '0.2' }`}}>
                    <img src={CrossLineVideo} alt="guide" style={{ height: "100%", width: "auto" }} />
                </ImgWrap>
                
                
                <Content style={{display:`${ bg ? 'none' : 'flex'}`}}>
                    <h2 style={{ fontSize: "24px", fontWeight:"bold", color:"#FF625A" }}>CrossLine</h2>
                    <p>Superb Ai Suite의 Image(New)프로젝트 Workapp에 십자선을 추가해주는 코드입니다.</p>
                    <p>{`워크앱에서 [F12]-[Console탭]-[ ${'>'} 꺽쇠옆에 코드 붙여넣기 ]-[엔터] 를 하면 적용됩니다.`}</p>
                    <CopyBtn onClick={onCopy} style={{ margin: "24px" }} size="large">복사하기</CopyBtn>
                    <span>{`버전 : ${metadata.version}      |      수정일 : ${metadata.updateDate}`}</span>
                    <CodeInput ref={codeRef} placeholder="code" value={code} rows={4} />
                </Content>

                <CopyBtn onClick={onBack} style={{ width:'128px', position:'fixed', right:'20px', bottom:'20px' }} size="large">배경보기</CopyBtn>
            
        </CrossLineWrap>
    );
}

const CrossLineWrap = styled.div`
    display : flex;
    flex : 1;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    position:'relative';
`;

const ImgWrap = styled.div`
height:100%;
display:flex;
justifyContent:center;
`;

const Content = styled.div`
    
    
    justify-content : center;
    align-items : center;
    flex-direction : column;

    position : fixed;
    top : 50%;
    left : 50%;

    transform : translate( -50%, -50% );
    
    padding : 16px;
    border : 1px solid #FF625A;

    background-color : #FFFFFF90;
`;

const CodeInput = styled(TextArea)`
    width : 60%;
    margin : 8px;
    &:hover { border-color : #FF625A; }
    &:focus { 
        border-color : #FF625A; 
        box-shadow: 0 0 0 5px #FF625A30;
    }
`;
const CopyBtn = styled(Button)`
    width : 60%;
    border-radius : 8px;
    &:hover { 
        border-color : #FF625A; 
        color : #FF625A;
    }
    &:focus { 
        border-color : #FF625A; 
        color : #FF625A
    }
`;
export default CrossLine;