'use client';

import { useRef } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Button, Checkbox, MenuItem, Typography } from '@mui/material';

import { downloadChart } from '@/types/common';
import useFormHook from '@/hooks/useFormHook/useFormHook';

import BarChart from '../chart/chart';
import {
  BoxMin,
  ControlLabel,
  DownloadButton,
  FlexBox,
  FormBuilderContainer,
  InputContainer,
  InputLabelField,
  NormalBox,
  SelectOption,
} from './formBuilder.styles';

type FormBuilderProps = {
  type: string;
};

const FormBuilder: React.FC<FormBuilderProps> = ({ type }) => {
  const { graphData, register, handleSubmit, onSubmitForm, errors } = useFormHook();
  const chartRef = useRef(null);
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormBuilderContainer maxWidth="md">
        <NormalBox>
          <InputLabelField htmlFor="Graph Title">Graph Title</InputLabelField>
          <InputContainer
            type="text"
            fullWidth
            error={Boolean(errors?.graphTitle)}
            disableUnderline
            placeholder="Sample Graph"
            {...register('graphTitle')}
          />
          {errors.graphTitle && (
            <Typography variant="caption" color="error">
              <b>{errors.graphTitle.message}</b>
            </Typography>
          )}
        </NormalBox>
        <NormalBox>
          <InputLabelField htmlFor="Graph Title">Graph Sub-Title</InputLabelField>
          <InputContainer
            type="text"
            fullWidth
            error={Boolean(errors?.subgraphTitle)}
            disableUnderline
            placeholder="Sub-Title Graph"
            {...register('subgraphTitle')}
          />
          {errors.subgraphTitle && (
            <Typography variant="caption" color="error">
              <b>{errors.subgraphTitle.message}</b>
            </Typography>
          )}
        </NormalBox>
        {type !== 'Pie Chart' && type !== 'Doughnut Chart' && type !== 'Radar Chart' && (
          <FlexBox>
            <BoxMin>
              <InputLabelField htmlFor="Axis Label">Horizontal Axis Label</InputLabelField>
              <InputContainer
                id="xAxis"
                type="text"
                fullWidth
                disableUnderline
                placeholder="X-Axis"
                error={Boolean(errors?.xAxis)}
                {...register('xAxis')}
              />
              {errors.xAxis && (
                <Typography variant="caption" color="error">
                  <b>{errors.xAxis.message}</b>
                </Typography>
              )}
            </BoxMin>
            <BoxMin>
              <InputLabelField htmlFor="Axis Label">Vertical Axis Label</InputLabelField>
              <InputContainer
                id="yAxis"
                type="text"
                fullWidth
                disableUnderline
                placeholder="Y-Axis"
                error={Boolean(errors?.yAxis)}
                {...register('yAxis')}
              />
              {errors.yAxis && (
                <Typography variant="caption" color="error">
                  <b>{errors.yAxis.message}</b>
                </Typography>
              )}
            </BoxMin>
          </FlexBox>
        )}
        {type === 'Scatter Chart' ? (
          <NormalBox>
            <InputLabelField htmlFor="Data Label">
              Data Values(x,y) (enter values seperated by commas e.g (2,3),(5,7))
            </InputLabelField>
            <InputContainer
              id="PLabel"
              type="text"
              fullWidth
              error={Boolean(errors?.PLabel)}
              {...register('PLabel')}
              disableUnderline
              placeholder="(5,20),(10,2)"
            />
            {errors.PLabel && (
              <Typography variant="caption" color="error">
                <b>{errors.PLabel.message}</b>
              </Typography>
            )}
          </NormalBox>
        ) : (
          <NormalBox>
            <InputLabelField htmlFor="Data Label">Data Labels (enter labels seperated by commas)</InputLabelField>
            <InputContainer
              id="dLabel"
              type="text"
              fullWidth
              error={Boolean(errors?.dLabel)}
              {...register('dLabel')}
              disableUnderline
              placeholder="a,b,c,d"
            />
            {errors.dLabel && (
              <Typography variant="caption" color="error">
                <b>{errors.dLabel.message}</b>
              </Typography>
            )}
          </NormalBox>
        )}
        {type !== 'Scatter Chart' && (
          <NormalBox>
            <InputLabelField htmlFor="Vlabel">Data Values (enter values seperated by commas)</InputLabelField>
            <InputContainer
              id="VLabel"
              type="text"
              fullWidth
              disableUnderline
              placeholder="10,4,40,50"
              error={Boolean(errors?.VLabel)}
              {...register('VLabel')}
            />
            {errors.VLabel && (
              <Typography variant="caption" color="error">
                <b>{errors.VLabel.message}</b>
              </Typography>
            )}
          </NormalBox>
        )}
        {type !== 'Line Graph' ? (
          <FlexBox>
            {type === 'Scatter Chart' && (
              <BoxMin>
                <InputLabelField htmlFor="pointSize">Enter Point Size</InputLabelField>
                <SelectOption id="pointSize" {...register('pointSize')} defaultValue={'4'}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </SelectOption>
              </BoxMin>
            )}
            <BoxMin>
              <InputLabelField htmlFor="legendPosition">Legend Position</InputLabelField>
              <SelectOption id="legendPosition" {...register('legendPosition')} defaultValue={'top'}>
                <MenuItem value={'top'}>Top</MenuItem>
                <MenuItem value={'bottom'}>Bottom</MenuItem>
                <MenuItem value={'left'}>Left</MenuItem>
                <MenuItem value={'right'}>Right</MenuItem>
              </SelectOption>
            </BoxMin>
            <BoxMin>
              <InputLabelField htmlFor="legendAlign">Legend Align</InputLabelField>
              <SelectOption id="legendAlign" {...register('legendAlign')} defaultValue={'center'}>
                <MenuItem value={'center'}>Center</MenuItem>
                <MenuItem value={'start'}>Start</MenuItem>
                <MenuItem value={'end'}>End</MenuItem>
              </SelectOption>
            </BoxMin>
          </FlexBox>
        ) : (
          <NormalBox>
            <InputLabelField htmlFor="lineCurve">Line Curve</InputLabelField>
            <SelectOption id="lineCurve" {...register('lineCurve')} defaultValue={'straight'}>
              <MenuItem value={'straight'}>Straight Line</MenuItem>
              <MenuItem value={'curved'}>Curve Line</MenuItem>
            </SelectOption>
          </NormalBox>
        )}
        {type !== 'Pie Chart' && type !== 'Radar Chart' && type !== 'Line Graph' && (
          <FlexBox>
            {type !== 'Scatter Chart' && (
              <ControlLabel
                control={<Checkbox {...register('startYAxisFromZero')} defaultChecked />}
                label="Start Y-axis from 0"
              />
            )}
            <ControlLabel control={<Checkbox {...register('showXAxisGridLines')} />} label="Show X axis grid lines" />
            <ControlLabel
              control={<Checkbox {...register('showYAxisGridLines')} defaultChecked />}
              label="Show Y axis grid lines"
            />
          </FlexBox>
        )}
        <NormalBox>
          <Button type="submit" variant="contained" sx={{ width: '200px', margin: 'auto' }}>
            Generate Bar Graph
          </Button>
        </NormalBox>
        <NormalBox ref={chartRef}>{graphData && <BarChart data={graphData} type={type} />}</NormalBox>
        <FlexBox>
          <DownloadButton
            variant="contained"
            onClick={() => {
              downloadChart(chartRef, 'png');
            }}
            startIcon={<DownloadIcon />}
          >
            Download PNG
          </DownloadButton>
          <DownloadButton
            variant="contained"
            onClick={() => {
              downloadChart(chartRef, 'jpg');
            }}
            startIcon={<DownloadIcon />}
          >
            Download JPG
          </DownloadButton>
        </FlexBox>
      </FormBuilderContainer>
    </form>
  );
};

export default FormBuilder;
