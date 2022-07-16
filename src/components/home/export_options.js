import React from 'react';
import styled from 'styled-components';
import PNGDoc from '../../images/PNG Doc.svg';
import PDFDoc from '../../images/PDF Doc.svg';
import MockupDoc from '../../images/Mockup Doc.svg';
import CircleExport from '../../images/Circle Export.svg';
import UnderlineExport from '../../images/Underline every scenario.svg';
import Circle from '../common/circle';
import Underline from '../common/underline';

const ExportOptions = ({ screenWidth }) => {
  return (
    <ExportOptionsContainer>
      {screenWidth > 1025
      ? <FlexWrapper>
        <img src={PDFDoc} width='120' style={{ marginRight: '38px' }} alt='pdf_img' />
        <img src={PNGDoc} width='90' style={{ marginRight: '38px' }} alt='png_img' />
        <img src={MockupDoc} width='120' style={{ marginRight: '38px' }} alt='mockup_doc_img' />
        <div>
          <Title><Circle text='Export' src={CircleExport} width='140' top='-4' left='-20' /> options<br />
            for <Underline text='every scenario' src={UnderlineExport} width='250' bottom='-20' /></Title>
          <p>Mockup provides you with a variety of export options.
            The selected<br />area can be exported as PDF, individual images, or .mockup files,<br />which allows you
            to share what you created and<br />exchange .mockup files with other users.</p>
        </div>
      </FlexWrapper>
    : screenWidth <= 1025 && screenWidth > 964
    ? <ColumnFlex>
        <div style={{ marginBottom: '28px' }}>
          <Title><Circle text='Export' src={CircleExport} width='140' top='-4' left='-20' /> options<br />
            for every scenario</Title>
          <p>Mockup provides you with a variety of export options.
            The selected<br />area can be exported as PDF, individual images, or .mockup files,<br />which allows you
            to share what you created and<br />exchange .mockup files with other users.</p>
        </div>
        <FlexWrapper>
          <img src={PDFDoc} width='120' style={{ marginRight: '38px' }} alt='pdf_img' />
          <img src={PNGDoc} width='90' style={{ marginRight: '38px' }} alt='png_img' />
          <img src={MockupDoc} width='120' alt='mockup_doc_img' />
        </FlexWrapper>
      </ColumnFlex>
    : <ColumnFlex>
        <div style={{ marginBottom: '28px' }}>
          <Title><Circle text='Export' src={CircleExport} width='140' top='-4' left='-20' /> options<br />
            for every scenario</Title>
          <p>Mockup provides you with a variety of<br />export options.
            The selected area can be<br />exported as PDF, individual images,<br />or .mockup files, which allows you
            to<br />share what you created and<br />exchange .mockup files with other users.</p>
        </div>
        <FlexWrapper>
          <img src={PDFDoc} width='100' style={{ marginRight: '38px' }} alt='pdf_img' />
          <img src={PNGDoc} width='75' style={{ marginRight: '38px' }} alt='png_img' />
          <img src={MockupDoc} width='100' alt='mockup_doc_img' />
        </FlexWrapper>
      </ColumnFlex>}
    </ExportOptionsContainer>
  );
};

const ExportOptionsContainer = styled.div`
  padding: 50px 0 60px 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 34px;
  margin-bottom: 10px;
`;

export default ExportOptions;