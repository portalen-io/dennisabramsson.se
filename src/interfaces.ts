export interface IData {
    projects?: IDataProject[];
}

export interface IDataProject {
    id: GUID;
    path: string;
    name: string;
    description?: string;
    thumbnailSrc?: string;
    iframeSrc?: string;
    blogs?: IDataProjectsBlog[];
}

export interface IDataProjectsBlog {
    title: string;
    paragraphs?: string[];
}