interface ApiType {
  query: <ResponseType>({ url, options }: { url: string; options?: RequestInit }) => Promise<ResponseType>;
}

export default class Api implements ApiType {
  constructor(private url: string) {}

  static createInstance = (url: string) => new Api(url);

  query: ApiType['query'] = async <ResponseType>({ url = '', options = {} }) => {
    const queryResponse = await fetch(`${this.url}${url}`, options);

    const data = (await queryResponse.json()) as ResponseType;

    return data;
  };

  mutation = async <ResponseType>() => {};
}
