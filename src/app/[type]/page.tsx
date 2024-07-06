import React from 'react';
import { redirect } from 'next/navigation';

import { useFetch } from '@/hooks/useFetch/useFetch';
import FormBuilderDetail from '@/components/builderDetails/builder';
import FormBuilder from '@/components/formBuilder/formBuilder';
import Headling from '@/components/headling/headling';

import { MainContainer } from './page.styles';

interface DashboardProps {
  params: {
    type: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ params }) => {
  const { data, isError } = useFetch(params?.type || ' ');

  if (isError) {
    redirect('/error');
  }
  const title = `${data?.name} Maker` || '';
  return (
    <MainContainer>
      <Headling title={title} size="h3" />
      <FormBuilder type={data?.name || ''} />
      <FormBuilderDetail items={data?.step || []} title={data?.name || ' '} />
    </MainContainer>
  );
};

export default Dashboard;

export function generateMetadata({ params }: { params: { type: string } }) {
  const { data } = useFetch(params?.type || ' ');
  const title = `${data?.name} Maker`;
  return {
    title: title,
    description: `Create a ${data?.name} for free with easy to use tools. Download the pie chart as JPG, PNG, or SVG file. Customize line graphs according to your choice.`,
    keywords: `graph maker, pie chart, line graph, ${data?.name}, Graph-genius`,
  };
}
