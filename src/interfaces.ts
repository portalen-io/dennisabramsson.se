export interface IData {
    projects?: IDataProject[];
}

export interface IDataProject {
    id: GUID;
    path: string;
    name: string;
    description?: string;
    thumbnailFile?: IDataProjectThumbnailFile;
    iframeSrc?: string;
    blogs?: IDataProjectsBlog[];
}

export interface IDataProjectThumbnailFile {
    name: string;
    type: string;
}

export interface IDataProjectsBlog {
    title: string;
    paragraphs?: string[];
}