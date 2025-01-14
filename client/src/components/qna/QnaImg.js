import styled from "styled-components";


function QnaImg({ url, ck }) {
    if(url === "/assets/Qnaimges/footprint-0.gif"){
        return (
            <ImgDiv>
                <Img src={url}></Img>
            </ImgDiv>
        )
    }
    if(ck === "true"){
        return(
            <ImgDiv>
                <FrameDiv url="/assets/Qnaimges/qna-frame.png">
                    <LightDiv url="/assets/Qnaimges/sealight.gif">
                        <SeaImg src={url}></SeaImg>
                    </LightDiv>
                    
                    {/* <Img src="/assets/Qnaimges/sealight.gif"></Img> */}
                    
                </FrameDiv>
            </ImgDiv>
        )
    }
    if(url === "/assets/Qnaimges/NoBackgroundS.gif" || url === "/assets/Qnaimges/NoBackground.gif" || url === "/assets/Qnaimges/qna8-1.gif" || url === "/assets/Qnaimges/qna8-2.gif"){
        return (
            <ImgDiv>
                <Img src={url}></Img>
            </ImgDiv>
        )
    }
    if(url === ""){
        return (
            <ImgDiv>
            </ImgDiv>
        )
    }
    return (
        <ImgDiv>
            <FrameDiv url="/assets/Qnaimges/qna-frame.png">
                <Img src={url}></Img>
            </FrameDiv>
        </ImgDiv>
    );
}


const ImgDiv = styled.div`
  width: 100%;
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 7% 5% 7%;
`;

const Img = styled.img`
  width: 310px;
  height: 215px;
  object-fit: cover;
`;

const SeaImg = styled(Img)`
  opacity: 0.7;
`;

const FrameDiv = styled.div`
  width: 320px;
  height: 225px;
  background-image: url("${(props) => props.url || "none"}");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightDiv = styled(FrameDiv)`
  width: 310px;
  height: 215px;
  background-position: center;
`;

export default QnaImg;