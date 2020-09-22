export interface IData {
    projects?: IDataProject[];
}

export interface IDataProject {
    id: GUID;
    path: string;
    name: string;
    description?: string;
    thumbnailFile?: IDataProjectThumbnailFile;
    iframe?: {
        src: string;
        fullWidth?: boolean;
    };
    asides?: IDataProjectsBlog[];
    blogs?: IDataProjectsBlog[];
}

export interface IDataProjectThumbnailFile {
    name: string;
    type: string;
    alt: string;
    fullWidth?: boolean;
}

export interface IDataProjectsBlog {
    title?: string;
    thumbnailFile?: IDataProjectThumbnailFile;
    paragraphs?: string[];
}


