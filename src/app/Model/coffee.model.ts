export class Coffee {
    private _id: string;
    private _name: string;
    private _tagline: string;
    private _first_roasted: string;
    private _strength_level: number;
    private _description: string;
    private _roaster_tips: string;
    private _contributed_by: string;
    private _image_url: string;


  public get image_url(): string {
    return this._image_url;
  }
  public set image_url(value: string) {
    this._image_url = value;
  }
  
  
    constructor(
      id: string,
      name: string,
      tagline: string,
      first_roasted: string,
      strength_level: number,
      description: string,
      roaster_tips: string,
      contributed_by: string,
      image_url: string
    ) {
      this._id = id;
      this._name = name;
      this._tagline = tagline;
      this._first_roasted = first_roasted;
      this._strength_level = strength_level;
      this._description = description;
      this._roaster_tips = roaster_tips;
      this._contributed_by = contributed_by;
      this._image_url = image_url;
    }
  
    // Getter methods
    get id(): string {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get tagline(): string {
      return this._tagline;
    }
  
    get first_roasted(): string {
      return this._first_roasted;
    }
  
    get strength_level(): number {
      return this._strength_level;
    }
  
    get description(): string {
      return this._description;
    }
  
    get roaster_tips(): string {
      return this._roaster_tips;
    }
  
    get contributed_by(): string {
      return this._contributed_by;
    }
  
    get image(): string {
      return this._image_url;
    }
  
    // Setter methods
    set name(value: string) {
      this._name = value;
    }
  
    set tagline(value: string) {
      this._tagline = value;
    }
  
    set first_roasted(value: string) {
      this._first_roasted = value;
    }
  
    set strength_level(value: number) {
      this._strength_level = value;
    }
  
    set description(value: string) {
      this._description = value;
    }
  
    set roaster_tips(value: string) {
      this._roaster_tips = value;
    }
  
    set contributed_by(value: string) {
      this._contributed_by = value;
    }
  
    set image(value: string) {
      this._image_url = value;
    }
  }
  