import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInUp, fadeOut, fadeInDown } from 'react-animations'

export const FadeIn = styled.div`animation: 0.4s ${keyframes`${fadeIn}`}`;
export const TitleEffectIn = styled.div`animation: 0.4s ${keyframes`${fadeInDown}`}`; // 0.7s pulse
export const PageSelectEffect = styled.div`animation: 0.25s ${keyframes`${fadeInDown}`}`;
export const CustomizationPanelEffect = styled.div`animation: 0.3s ${keyframes`${fadeIn}`}`;
export const ColorPickerEffect = styled.div`animation: 0.3s ${keyframes`${fadeIn}`}`;
export const HomePageLogoFadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;
export const HomePageLogoEffect1 = styled.div`animation: 0.8s ${keyframes`${fadeInDown}`}`;
export const HomePageLogoEffect2 = styled.div`animation: 1.5s ${keyframes`${fadeInDown}`}`;
export const HomePageLogoEffect3 = styled.div`animation: 2.1s ${keyframes`${fadeInDown}`}`;
export const HomePageLogoEffect4 = styled.div`animation: 2.6s ${keyframes`${fadeInDown}`}`;
export const HomePageLogoEffect5 = styled.div`animation: 3s ${keyframes`${fadeInDown}`}`;
export const HomePageLogoEffect6 = styled.div`animation: 3s ${keyframes`${fadeInUp}`}`;
export const HomePageLogoEffect7 = styled.div`animation: 2.6s ${keyframes`${fadeInUp}`}`;
export const HomePageLogoEffect8 = styled.div`animation: 2.1s ${keyframes`${fadeInUp}`}`;
export const HomePageLogoEffect9 = styled.div`animation: 1.5s ${keyframes`${fadeInUp}`}`;
export const HomePageLogoEffect10 = styled.div`animation: 0.8s ${keyframes`${fadeInUp}`}`;
export const HomePageLogoLineEffect = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;
export const HomePageTextEffect = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;

export const HeaderCoverFadeOut = styled.div`animation: 1s ${keyframes`${fadeOut}`}`;









export function generateNewId(element) {
    let highestId = 0;
    for(let i=0; i<element.length; i++) {
        let currentId = element[i].schemeId;
        if (highestId < currentId) {
            highestId = currentId;
        }
    }
    return highestId+1;
}


