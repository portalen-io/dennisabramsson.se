export interface IData {
    projects?: IDataProject[];
}

export interface IDataProject {
    id: Guid;
    path: string;
    name: string;
    description?: string;
    iframeSrc?: string;
    blogs?: IDataProjectsBlog[];
}

export interface IDataProjectsBlog {
    title: string;
    paragraphs?: string[];
}