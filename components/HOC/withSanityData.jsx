import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { client } from '../../lib/client';

const withSanityData = (WrappedComponent) => {
  const WithSanityData = (props) => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const query = `*[_type == "toys"]{
          metaTitle,
          title,
          description
        }`
      // Запрос к CMS Sanity для получения данных о проектах на нужном языке
      client.fetch(query, { language_code: props.language })
        .then((data) => {
          // Сохранение полученных данных в состоянии
          setProjectData(data);
        })
        .catch((error) => {
          // Обработка ошибки при загрузке данных из CMS Sanity
          console.error('Error fetching project data from CMS Sanity:', error);
        });
    }, [props.language]);

    // Если данные о проектах еще не загружены, показываем загрузочный индикатор
    if (!projectData) {
      return <div>Loading...</div>;
    }

    return (
      <IntlProvider locale={props.language} messages={projectData}>
        <WrappedComponent {...props} />
      </IntlProvider>
    );
  };

  return WithSanityData;
};

export default withSanityData;
