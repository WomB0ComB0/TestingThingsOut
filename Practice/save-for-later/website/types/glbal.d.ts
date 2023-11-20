interface SearchQueryResult {
  relevance: 1 | 2 | 3 | 4 | 5;
  definitions: {
    meta: {
      id: string;
      uuid: string;
      sort: string;
      src: string;
      section: string;
      stems: string[];
      offensive: boolean;
    };
    hwi: {
      hw: string;
      prs: {
        mw: string;
        sound: {
          audio: string;
        };
      }[];
    };
    fl: string;
    def: {
      sseq: [
        [
          [
            string,
            {
              sn: string;
              dt: [
                [
                  string,
                  {
                    text: string;
                  }[],
                ],
              ];
            },
          ],
        ],
      ];
    }[];
    uros: {
      ure: string;
      prs: {
        mw: string;
        sound: {
          audio: string;
        };
      }[];
      fl: string;
    }[];
    shortdef: string[];
  }[];
}

interface GitHubs<T = string> extends Record<string, T> {}

type IndexProps = string | number | null | undefined;

interface LocaleProps {
  params: {
    lang: string;
  };
}
